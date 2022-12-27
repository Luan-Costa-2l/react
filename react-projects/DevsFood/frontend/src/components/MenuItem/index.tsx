import { LinkArea, LinkIcon } from './styled';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type Props = {
    itemId: string;
    title: string;
    icon: string;
    link: string;
}

export default ({ itemId, title, icon, link }: Props) => {
    const location = useLocation();

    let isActive: boolean = location.pathname == link;

    return (
        <>
            <LinkArea id={itemId} active={isActive}>
                <Link to={link}>
                    <LinkIcon src={icon} alt="" />
                </Link>
            </LinkArea>
            <Tooltip anchorId={itemId} content={title} place="right" />
        </>

    )
}