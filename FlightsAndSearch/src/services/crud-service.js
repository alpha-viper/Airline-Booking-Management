
class CrudService
{
    constructor(repository)
    {
        console.log("In crud service",repository);
        this.repository=repository;
    }

    async create(data)
    {
        try {
            const response=await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went worng in crud-service");
            console.log(error);
            throw error;
        }
    }
    async destroy(id)
    {
        try {
            const response=await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went worng in crud-service");
            throw error;
        }
    }
    async get(id)
    {
        try {
            const response=await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went worng in crud-service");
            throw error;
        }
    }
    async getAll()
    {
        try {
            const response=await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went worng in crud-service");
            throw error;
        }
    }
    async update(id,data)
    {
        try {
            const response=await this.repository.update(id,data);
            return response;
            
        } catch (error) {
            console.log("Something went worng in crud-service");
            throw error;
        }
    }
}

module.exports=CrudService;
