export const toModel = ({
  id, _id, specializationName
 }) => {
    
  let data = {
    id : (id || _id).toString(),
    specializationName
  };

  return data;
};

export const toSearchModel = items => items.map(item => toModel(item));