import { HashRequest, LoginRequest, RegistrationRequest } from "../Domain/authDomain";
import logger from "../logger";
import { EmailCheck, generateRandomString, LoginRepository, RegisterRepository } from "../repository/authRepository";
import bcrypt from "bcrypt";


export async function LoginUsecase(request: LoginRequest) {
    return LoginRepository(request);
}


export async function RegisterUsecase(request: RegistrationRequest) {
    logger.info("Inside RegisterUsecase");
    let EmailCheckResponse = await EmailCheck(request.email);
    if (EmailCheckResponse == false) {
        logger.debug("Email Id is already present: ", request.email);
        return false;
    } else {
        // Password Hash
        let hashreq: HashRequest = {
            password: request.password,
            salt: 10     
        }
        let hashedPassword = await hashPassword(hashreq);
        logger.debug("Hashed value is ", hashedPassword);
        request.password = hashedPassword;
        RegisterRepository(request)
    }

}

export async function hashPassword(req: HashRequest): Promise<string> {
    const hash = await bcrypt.hash(req.password, req.salt);
    return hash;
}
