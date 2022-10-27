import "./TextSection.mod.css";

interface TextSectionProps {
    title: string;
    text: string;
    img?: string;
    child?: React.ReactNode;
    imagePosition: 'left' | 'right';
}

export const TextSection = ({ title, text, img,child, imagePosition }: TextSectionProps) => {

    const style = {
        'display': 'flex',
        'flex-direction': imagePosition === 'right' ? 'row' : 'row-reverse',
        'justify-content': 'space-between',

    }

    return (
        <section  >
            <h2 className='sub-title who-we-are'>Quem somos</h2>
            <div style={style}>
                <p className="text">
                    { text}
                </p>
                { img ? <img src={img} alt="imagem" /> : child}
            </div>
        </section>
    );
}