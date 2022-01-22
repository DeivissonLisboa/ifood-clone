import { TouchableOpacity, Text } from "./style";

function Button({ theme, text, ...rest }) {
    return (
        <TouchableOpacity theme={theme || ""} {...rest}>
            <Text theme={theme || ""}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;
