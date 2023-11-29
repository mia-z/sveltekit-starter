declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }

    type EntityRender = (context: CanvasRenderingContext2D, deltaTime: number) => void;
    type EntitySetup = (context: CanvasRenderingContext2D) => void;

    type RenderEntity = {
        render: EntityRender,
        setup?: EntitySetup
    }

    type RenderListProxy = {
        add(entity: RenderEntity): void,
        remove(entity: RenderEntity): void
    }
}

export {};
