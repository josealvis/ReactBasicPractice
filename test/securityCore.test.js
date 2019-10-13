
import { securityCore} from '../src/security/securityCore';


describe('Check login status', ()=>{
     it('should not be logged', ()=>{
        let se =  new securityCore();
         expect(se.isLogged()).toBe(false);
     })
 });

