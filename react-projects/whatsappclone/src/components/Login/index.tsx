import './style.css';
import api from '../../api';

type Props = {
    onReceive: ({parameter}: any) => void;
}

export default ({ onReceive }: Props) => {
    const handleFacebookLogin = async () => {
        let result = await api.fbPopup();
        if(result) {
            onReceive(result.user)
        } else {
            alert('Erro!')
        }
    }
    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com o facebook</button>
        </div>
    )
}