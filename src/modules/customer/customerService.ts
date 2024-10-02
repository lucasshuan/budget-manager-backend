import { ICreateCustomerDTO, IUpdateCustomerDTO } from "./customerModel";
import customerRepository from "./customerRepository";

class CustomerService {
  async listByUserId(userId: number) {
    const customers = await customerRepository.listByUserId(userId);
    return customers;
  }

  async findById(id: number) {
    const customer = await customerRepository.findById(id);
    return customer;
  }

  async create(input: ICreateCustomerDTO) {
    const customer = await customerRepository.create(input);
    return customer;
  }

  async update(input: IUpdateCustomerDTO) {
    const customer = await customerRepository.update(input);
    return customer;
  }

  async delete(id: number) {
    const customer = await customerRepository.delete(id);
    return customer;
  }
}

export default new CustomerService();
