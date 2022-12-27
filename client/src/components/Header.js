export default function Header({ name }) {
    return (
        <div className="header">
            <div className="nameTitle">
                <img src={require(`../images/${name}Title.png`)} alt="Doodles fonts" />
            </div>
        </div>
    );
}