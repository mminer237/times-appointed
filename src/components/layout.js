import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "./style.scss"
import Seo from "../components/seo"

export default function Layout({ children, description, title }) {
	return (
		<>
			<Seo description={description} title={title} />
			<header>
				<Link to="/">
					<h1>Times Appointed</h1>
				</Link>
			</header>
			{children}
			<footer><div>Made by <a href="https://matthewminer.name">Matthew Miner</a></div></footer>
		</>
	)
}