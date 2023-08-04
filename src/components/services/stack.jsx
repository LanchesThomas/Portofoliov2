import { PropTypes } from 'prop-types';

const StackCard = ({ id, logo, title }) => {
        StackCard.propTypes = {
                id: PropTypes.number.isRequired,
                logo: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
        };
        return (
                <div className=" flex flex-col gap-2 items-center bg-tertiary p-5 hover:bg-secondary hover:scale-110 transition-all group">
                        <div
                                key={id}
                                className="text-7xl group-hover:text-main"
                        >
                                {logo}
                        </div>
                        <p className="text-xs group-hover:text-main">{title}</p>
                </div>
        );
};

export default StackCard;
