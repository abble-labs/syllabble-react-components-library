import curved from './curved8.jpeg';
import SignupForm from './Components/SignupForm';

const SignupPage = () => {



    return (
        <div className="h-screen px-6 relative">
            <div className='w-full overflow-hidden rounded-b-2xl relative' style={ { height: 430 } }>
                <img src={ curved } alt="Curved" className='w-full absolute -top-60 rounded-b-2xl' />
            </div>
            <div className='absolute inset-0 flex justify-center items-center'>
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupPage;