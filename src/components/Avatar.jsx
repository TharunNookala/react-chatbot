import botImage from '../assets/bot-img.png'

const Avatar = () => {
  return (
    <div>
        <img className='bg-contain' src={botImage} width={40} height={40} alt='Bot-Avatar'/>
    </div>
  )
}

export default Avatar