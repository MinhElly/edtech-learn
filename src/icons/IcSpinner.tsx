type Props = {
    width: string;
    height: string;
};

export const IcSpinner = ({ width, height }: Props) => {
return (
<div style={{ width, height }}>
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
    viewBox="0 0 100 100" enable-background="new 0 0 0 0">
        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23-23-23-23,23-23,23-23,12.7-10.3,23-23,23s23-10.3,23-23">
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </path>
    </svg>
</div>
);
};

