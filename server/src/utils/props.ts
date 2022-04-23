import PropertiesReader, {Reader, Value} from "properties-reader";

export const getAppProperty = (prop: string): Value | null => {
    const propsReader: Reader = PropertiesReader("app.properties");
    return propsReader.get(prop);
}