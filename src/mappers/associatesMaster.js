
export const toModel = ({
  id, _id, associateName, associatePhone, associateAddress, associateSpecializeIn = [],
 }) => {
  let data = {
    id : (id || _id).toString(),
    specializationName,
    associateName, associatePhone,
    associateAddress,
    associateSpecializeIn: [],
  };

  if (associateSpecializeIn.length > 0) {
    data.associateSpecializeIn = associateSpecializeIn.map(item => {
      if (item.specializationName) {
        return ({
          id : (id || _id).toString(),
          specializationName: item.specializationName
        });
      } else {
        return item.specializationName.toString();
      }
    });
  } else {
    data.associateSpecializeIn = [];
  }

  return data;
};

export const toSearchModel = items => items.map(item => toModel(item));