import 'reflect-metadata';

export const PROPS_KEY = 'ioc::inject_props';

export const Inject = () => {
    return (target: any, targetKey: string) => {
        const annotationTarget = target.constructor;

        let props: { [x: string]: any } = {};
        if (Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)) {
            props = Reflect.getMetadata(PROPS_KEY, annotationTarget);
        }

        props[targetKey] = {
            value: targetKey
        }

        Reflect.defineMetadata(PROPS_KEY, props, annotationTarget);
    }
}