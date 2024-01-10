import "./global-style.css"

type Props = {
    children: React.ReactNode;
}

export function GlobalStyled(props: Props) {
    return <>{props.children}</>
}