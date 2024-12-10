import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import './login.css'

const Login = () => {
    return (
        <div className="content">
            <div className="form-container">
                <h2 className="form-title">LogIn</h2>
                <form className="form">
                    <div className="form-section">
                        <label className="label-container">
                            <span className="label-text">Email</span>
                        </label>
                        <Input />
                    </div>
                    <div className="form-section">
                        <label className="label-container">
                            <span className="label-text">Password</span>
                        </label>
                        <Input />
                    </div>
                    <Button className="w-full">Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;