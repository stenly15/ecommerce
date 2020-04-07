import Link from 'next/link';

const ButtonLink = props => (
    <Link href={`/${props.path}/[id]`} as={`/${props.path}/${props.id}`}>
        <button>{props.title}</button>
    </Link>
);

export default ButtonLink;