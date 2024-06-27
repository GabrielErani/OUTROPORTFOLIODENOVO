import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Gabriel Cirilo Erani',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Front-End Web developer',
                2000,
                'Future FullStack',
                2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className='text-5xl font-bold text-slate-300 m-4'
        />
    );
};

export default TypeWriter;