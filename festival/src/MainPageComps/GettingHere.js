import React from 'react'
import { Container,  Divider, Button } from 'semantic-ui-react'

const GettingHere = () => (
	<div className='Getting-Here'>
		<div className='Left-Side-Info'>
			<h1 className='Ticket-Title'> Tickets </h1>
			<div className='Getting-Here-Price'>
				<Container textAlign='left'>
						<p> General Admission </p>
						<p> General Admission to Dancefestopia for Friday, Saterday, Sunday. </p>
						<Divider />
					</Container>
					<Container textAlign='right'>
						<p>$$ 159.98</p>
						<Button> 
						Buy Now
						</Button>
					</Container>
			</div>
			<div className='Getting-Here-Price'>
				<Container textAlign='left'>
						<p> VIP Admission </p>
						<p> VIP Admission to Dancefestopia for Friday, Saterday, Sunday. </p>
						<p> Includes Access to Sky Deck, Air-conditioned lounge, Private Restrooms, A full cash bar, and power outlets for phone charging. THIS WILL SELL OUT. </p>
						<Divider />
					</Container>
					<Container textAlign='right'>
						<p>$$ 259.98</p>
						<Button> 
						Buy Now
						</Button>
					</Container>
			</div>
			<div className='Getting-Here-Price'>
				<Container textAlign='left'>
						<p> Camping Addmission </p>
						<p> General Admission to Dancefestopia Camp Grounds for Friday, Saterday, Sunday. </p>
						<p> A General Admission ticket is Require to get into Camp grounds. </p>
						<Divider />
					</Container>
					<Container textAlign='right'>
						<p>$$ 45.00</p>
						<Button> 
						Buy Now
						</Button>
					</Container>
			</div>
		</div>

	</div>

	)



export default GettingHere