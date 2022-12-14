import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

class Person extends Component {

	addPerson = ()=>{
		const name = this.nameNode.value
		const age = this.ageNode.value
		const personObj = {id:nanoid(),name,age}
		this.props.jiaYiRen(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<Container>
                    <p>Quick Quote</p>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    {/*<Form.Label className="label">First Name</Form.Label>*/}
                                    <label className='important'>First Name</label>
                                    <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    {/*<Form.Label className="label">Last Name</Form.Label>*/}
                                    <label className='important'>Last Name</label>
                                    <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group>
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Label>Telephone / Mobile</Form.Label>
                            <Form.Control
                                type="text"
                                name="mobile"
                                required
                            />
                        </Form.Group>
                        
                        <Form.Group>
                        <Form.Group as={Col}>
                                <Form.Label>From Currency</Form.Label>
                                <Form.Control as="select" name="fromcur">
                                    <option value="AUD">Australian Dollor[AUD]</option>
                                    <option value="ASD">United States Dollor[AUD]</option>
                                    </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col}>
                                <Form.Label>To Currency</Form.Label>
                                <Form.Control as="select" name="tocur">
                                    <option value="ASD">United States Dollor[AUD]</option>
                                    <option value="AUD">Australian Dollor[AUD]</option>
                                    </Form.Control>
                            </Form.Group>

                            {/*<Form.Group as={Col}>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                type="text"
                                name="amount"
                                required
                                />
                            </Form.Group>*/}
                        </Form.Group>

		{/*<Button variant="primary">GET QUOTE</Button>*/}
                    </Form>
					<div>
						<h2>??????Person??????,?????????????????????{this.props.he}</h2>
						<input ref={c=>this.nameNode = c} type="text" name="amount" placeholder="????????????"/>
						<input ref={c=>this.ageNode = c} type="text" placeholder="????????????"/>
						<button onClick={this.addPerson}>??????</button>
						<ul>
							{
								this.props.yiduiren.map((p)=>{
									return <li key={p.id}>{p.name}--{p.age}</li>
								})
							}
						</ul>
					</div>
                </Container>
			/*<div>
				<h2>??????Person??????,?????????????????????{this.props.he}</h2>
				<input ref={c=>this.nameNode = c} type="text" placeholder="????????????"/>
				<input ref={c=>this.ageNode = c} type="text" placeholder="????????????"/>
				<button onClick={this.addPerson}>??????</button>
				<ul>
					{
						this.props.yiduiren.map((p)=>{
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
				</div>*/
		)
	}
}

export default connect(
	state => ({yiduiren:state.rens,he:state.he}),//????????????
	{jiaYiRen:createAddPersonAction}//???????????????????????????
)(Person)
