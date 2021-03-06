import fs from 'fs/promises';
import path from 'path';

interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number },
}

// interface IOpsInfo { 
//   createdPlants: number 
// }

export default class Plants {
  private PLANTS = path.join(__dirname, 'plants.json');

  // initPlant(plant: IPlant) {
  //   const { id, breed, needsSun, origin, specialCare, size } = plant;

  //   const waterFrequency = needsSun
  //     ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
  //     : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

  //   const newPlant: IPlant = {
  //     id,
  //     breed,
  //     needsSun,
  //     origin,
  //     specialCare: {
  //       ...specialCare,
  //       waterFrequency,
  //     },
  //     size,
  //   };
  //   return newPlant;
  // }

  async getPlants() {
    const plantsRaw = await fs.readFile(this.PLANTS, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  async getPlantById(id: string) {
    const plantsRaw = await this.getPlants();

    const plantById = plantsRaw.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: string) {
    const plantsRaw = await this.getPlants();
    
    const removedPlant = plantsRaw.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plantsRaw.filter((plant) => plant.id !== id);
    await fs.writeFile(this.PLANTS, JSON.stringify(newPlants));

    return removedPlant;
  }

  // async getPlantsThatNeedsSunWithId(id: string) {
  //   const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
  //   const plants: IPlant[] = JSON.parse(plantsRaw);

  //   const filteredPlants = plants.filter((plant) => {
  //     if (plant.needsSun && plant.id === id) {
  //       if (!plant.specialCare || plant.specialCare.waterFrequency > 2) {
  //         return true;
  //       }
  //     }

  //     return false;
  //   });
  //   return filteredPlants;
  // }

  // async editPlant(plantId: string, newPlant: IPlant) {
  //   const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
  //   const plants: IPlant[] = JSON.parse(plantsRaw);

  //   const updatedPlants = plants.map((plant) => {
  //     if (plant.id === plantId) return newPlant;
  //     return plant;
  //   });

  //   await fs.writeFile(PLANTS, JSON.stringify(updatedPlants));
  //   return newPlant;
  // }

  // async savePlant(plant: IPlant) {
  //   const plantsRaw = await fs.readFile(PLANTS, { encoding: 'utf8' });
  //   const plants: IPlant[] = JSON.parse(plantsRaw);

  //   const newPlant = this.initPlant({ ...plant });
  //   plants.push(newPlant);

  //   const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
  //   let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
  //   createdPlants += 1;
  //   await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

  //   await fs.writeFile(PLANTS, JSON.stringify(plants));
  //   return newPlant;
  // }
}
