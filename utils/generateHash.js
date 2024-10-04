const bcrypt = require('bcryptjs');
const uuid = require('uuid');


const generateSaltedHash = async (password, saltVal=null, uuidVal=null) => {
    const saltValue = await bcrypt.genSalt(10);


    const uuidValue = uuid.v4();

    const combinedValue = `${password}${uuidVal ? uuidVal : uuidValue}`;

    const hashedValue = await bcrypt.hash(combinedValue, saltVal ? saltVal : saltValue);

    return {
        hash: hashedValue,
        uuid: uuidValue,
        salt: saltValue
    };
};

module.exports = { generateSaltedHash }