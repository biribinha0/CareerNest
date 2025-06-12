import bcrypt from "bcryptjs";

const generateHashedPassword = async (senha) => {
    const password = senha // senha que deseja hashear
    try {
        //gerar o salt
        const salt = await bcrypt.genSalt(10);
        //Hashear a senha com salt
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword
        process.exit(0); // encerra o processo após exibir o hash
    } catch (error) {
        console.error('Erro ao hashear a senha:', error);
        return ('Erro ao Hashear Senha.')
        process.exit(1) // encerra o processo após exibir o hash
    }
}

export {generateHashedPassword}