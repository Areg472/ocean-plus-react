import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Footer} from "@/components/footer.tsx";
import {Button} from "@/components/ui/button.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;