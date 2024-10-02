import { CustomError } from "../../utils/error";
import componentRepository from "../component/componentRepository";
import { ICreateExpenditureDTO } from "./expenditureModel";
import expenditureRepository from "./expenditureRepository";

class ExpenditureService {
  async create({ componentId, budgetId }: ICreateExpenditureDTO) {
    const component = await componentRepository.findById(componentId);
    if (!component) {
      throw new CustomError(404, "Componente não encontrado");
    }
    const expenditure = await expenditureRepository.create({
      price: component.price,
      componentId,
      budgetId,
    });
    return expenditure;
  }
}

export default new ExpenditureService();
