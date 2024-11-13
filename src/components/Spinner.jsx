import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '100px auto',
};

const Spinner = ({loading}) => {
    return (
        <div title="clip-loader">
            <ClipLoader
                loading={loading}
                cssOverride={override}
                color="#000"
                size={150}
            />
        </div>
    )
}

export default Spinner;
