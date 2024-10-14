import { Link } from "react-router-dom";
import { Text } from "../../components/Text/Text"

function Notfoundpage() {
    return(
        <div>
            <Text>Такой страницы не сущуствует. Перейдите <Link to="/" style={{color: "#D20A11"}}>Home</Link></Text>
        </div>
    )
}
export {Notfoundpage}