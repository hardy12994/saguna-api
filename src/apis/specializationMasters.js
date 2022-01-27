import * as specializationMasterMapper from "../mappers/specializationMaster";

const db = global.app.db;

export const createSpecializationMaster = async (req, res) => {
  const { specializationName } = req.body;
  
  if(!specializationName) {
    return res.failure('specializationName is required');
  }

  try {
    const specializationMaster = await db.specializationMaster.findOneOrCreateSpecializationMaster(specializationName);
    res.data(specializationMasterMapper.toModel(specializationMaster));
  } catch (error) {
    res.failure(error);
  }
}

export const getSpecializationMasters = async (req, res) => {
  try {
    const specializationMasters = await db.specializationMaster.find({});
    res.page(specializationMasterMapper.toSearchModel(specializationMasters));
  } catch (error) {
    res.failure(error);
  }
}
