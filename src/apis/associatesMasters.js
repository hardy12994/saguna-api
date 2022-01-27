import * as associatesMasterMapper from "../mappers/associatesMaster";

const db = global.app.db;

export const createAssociatesMaster = async (req, res) => {
  const { 
    associateSpecializeInIds=[], // specializationIds
    associateName,
    associatePhone,
    associateAddress
  } = req.body;
  let associateSpecializeIn = [];

  try {
    if (associateSpecializeInIds.length > 0){
      associateSpecializeIn = await db.specializationMaster.find({ $in: associateSpecializeInIds });
      if (associateSpecializeIn.length !== associateSpecializeInIds.length) {
        return res.failure(`send correct associateSpecializeIn Id's`);
      }
    }

    const associatesMaster = await new db.associatesMaster({
      associateSpecializeIn,
      associateName,
      associatePhone,
      associateAddress
    }).save();
    res.data(associatesMasterMapper.toModel(associatesMaster));
  } catch (error) {
    res.failure(error);
  }
}

export const getAssociatesMaster = async (req, res) => {
  const { associatesMasterId } = req.params;

  if(!associatesMasterId) {
    return res.failure('associatesMasterId is required');
  }

  try {
    const associatesMaster = await db.associatesMaster.findById(associatesMasterId).populate('associateSpecializeIn');
    res.data(associatesMasterMapper.toModel(associatesMaster));
  } catch (error) {
    res.failure(error);
  }
}

// get all Associates Masters
// get Associates Masters via name
export const getAssociatesMasters = async (req, res) => {
  const { associateName } = req.query;
  const query = {};
  
  if (associateName) {
    query.associateName = {
      $regex: new RegExp(associateName, 'ig')
    };
  }
 
  try {
    const associatesMasters = await db.associatesMaster.find(query).populate('associateSpecializeIn');
    res.page(associatesMasterMapper.toSearchModel(associatesMasters));
  } catch (error) {
    res.failure(error);
  }
}
