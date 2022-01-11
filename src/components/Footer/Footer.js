import './Footer.scss'

function Footer() {
    return (
        <div className='footer container wide'>
            <div className='social-media'>
                <a rel="noreferrer" target="_blank" className='facebook' href='https://www.facebook.com/profile.php?id=100008143036227'>
                    <i className='fab fa-facebook' />
                </a>
                <a rel="noreferrer" target="_blank" className='insta' href='https://www.instagram.com/tgtar3/'>
                    <i className='fab fa-instagram' />
                </a>
                <a rel="noreferrer" target="_blank" className='github' href='https://github.com/thienFE'>
                    <i className='fab fa-github' />
                </a>
            </div>
            <p>Designed 12/2021</p>
            <p>Powered by thienFE <i className='fas fa-heart' /></p>
        </div>
    )
}

export default Footer
