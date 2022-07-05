const bcrypt = require('bcrypt')

async function verifyPassword(){
    const myPassword = 'un password 20.20'
    const myPasswordHashed = '$2b$10$t6Lfge/s3vbB6HJV9jhifeQ1DDMUM0cxr2La9jwxNg1NKsr4pEg/2'
    const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
    console.log(isMatch)
}
verifyPassword()
