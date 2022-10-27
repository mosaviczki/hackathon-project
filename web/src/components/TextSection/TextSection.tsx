import "./TextSection.mod.css";

interface TextSectionProps {
    title: string;
    text: string;
    img: string;
    imagePosition: 'left' | 'right';
}

export const TextSection = ({ title, text, img, imagePosition }: TextSectionProps) => {

    const style = {
        'display': 'flex',
        'flex-direction': imagePosition === 'right' ? 'row' : 'row-reverse',
    }

    return (
        <section  >
            <h2 className='sub-title who-we-are'>Quem somos</h2>
            <div style={style}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada tortor. Nulla vel lacus sed diam dapibus feugiat semper quis ligula. Quisque sit amet arcu congue, molestie odio sed, sollicitudin turpis. Fusce non rutrum mauris. Vivamus malesuada eros a ante facilisis iaculis. Ut viverra blandit sapien, vel euismod sapien porta sed. Fusce lacinia nisi mollis augue lacinia, quis egestas enim vulputate. Duis semper non sem non eleifend. Aenean suscipit lectus sit amet porttitor euismod. Duis a ullamcorper mauris. Integer ac venenatis nibh.
                    Donec tristique tristique diam ut sodales. Aliquam erat volutpat. Suspendisse ullamcorper nulla id augue finibus accumsan. Integer varius venenatis nibh. Fusce blandit euismod feugiat. Donec sagittis tellus vitae massa porta lobortis. Suspendisse ornare blandit ligula, eu commodo lacus facilisis ac. Suspendisse potenti. Aliquam congue et nunc sit amet fringilla. Curabitur ullamcorper urna at leo blandit iaculis. Nam mollis sagittis ante, aliquam aliquet leo iaculis a.</p>
                <img src={ img} />
            </div>
        </section>
    );
}