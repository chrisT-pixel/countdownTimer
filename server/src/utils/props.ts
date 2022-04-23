import PropertiesReader, {Reader, Value} from "properties-reader";

export const getServerProperty = (prop: string): Value | null => {
    const propsReader: Reader = PropertiesReader("server.properties");
    return propsReader.get(prop);
}