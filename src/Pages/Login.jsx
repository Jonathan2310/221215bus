import FormLogin from "../Components/atoms/FormLogin";
import Caption from "../components/atoms/Caption";

function Login() {
    return ( 
        <>
            <center>
                <Caption msn="Ingrese a su cuenta"></Caption>
            </center>
            <FormLogin/>
        </>
        
    );
}

export default Login;