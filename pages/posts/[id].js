export default function Post ({ id }) {
	return (
		<div>this is post show {id}</div>
	)
}

export async function getStaticPaths() {
	const paths = [{
		params: {
			id: '1',
		}
	}, {
		params: {
			id: '2'
		}
	}]
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	return {
		props: {
			id: params.id
		}
	}
}