function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 
        px-32 py-14 bg-gray-100 text-gray-600">
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
 
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referrals accepted</p>
                <p>Learning from PapaFam</p>
            </div>
 
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">HOST</h5>
                <p>Papa React</p>
                <p>Presenting</p>
                <p>Zero to Full Stack Hero</p>
                <p>Bikram is Learning </p>
                <p>Enjoying the beauty </p>
            </div>
 
            <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p> Trust & Safety</p>
                <p> COnnect through LinkedIn</p>
                <p> Email </p>
                <p>Taking tons of info from this community</p>
                <p>Always Learning</p>
            </div>
        </div>
    )
}

export default Footer
