import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

class Person extends Component {

	addPerson = ()=>{
		const age = this.ageNode.value
		const personObj = {age}
		this.props.jiaYiRen(personObj)
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
						<input ref={c=>this.ageNode = c} type="text" placeholder="$250"/>
						<button onClick={this.addPerson}>GET QUOTE</button>
						<ul>
							{
								this.props.yiduiren.map((p)=>{
									return <li key={p.id}>{p.age}</li>
								})
							}
						</ul>
					</div>
                </Container>
			/*<div>
				<h2>我是Person组件,上方组件求和为{this.props.he}</h2>
				<input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
				<input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加</button>
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
	state => ({yiduiren:state.rens,he:state.he}),//映射状态
	{jiaYiRen:createAddPersonAction}//映射操作状态的方法
)(Person)
