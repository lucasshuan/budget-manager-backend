import { ICreateExpenditureDTO } from "./expenditureModel";
import expenditureRepository from "./expenditureRepository";

class ExpenditureService {
  async create(input: ICreateExpenditureDTO) {
    const expenditure = await expenditureRepository.create(input);
    return expenditure;
  }

  async delete(id: number) {
    const expenditure = await expenditureRepository.delete(id);
    return expenditure;
  }
}

export default new ExpenditureService();
