const SignImage = ({array}) => {

    for (let i = 0; i < array.length; i++) {
        return ( CreateImage (array[i], "signs/"+array[i]+".png"))
    }

}


export default SignImage

const CreateImage = ({ name, image}) => {

    return (
        <div>
            <img src={image} alt={name}/>
        </div>
    )
}


