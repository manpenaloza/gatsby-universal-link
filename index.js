import React from "react";
import { Link } from "gatsby";
import { SectionLink } from "react-scroll-section";

/* MULTILINK COMPONENT RENDERS EITHER
   - AN INTERNAL GATSBY LINK (renders, if the Multilink component gets passed a Gatsby-like "to" property)
   - AN ONPAGE SCROLL LINK (renders, if the Multilink component gets passed a "scrollToId" property, this requires to have a react-scroll-section Section component on the page)
   - A NORMAL EXTERNAL LINK (renders, if any other pattern is used)
*/
export default function MultiLink(props) {
  const internal = /^\/(?!\/)/.test(props.to);
  const scrollable = props.scrollToId;

  // if internal, render a Gatsby Link
  if (internal)
    return (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );

  // if scrollable, render a proper react-scroll-section Link
  if (scrollable)
    return (
      <SectionLink section={props.scrollToId}>
        {({ onClick }) => (
          <a onClick={onClick} className={props.className}>
            {props.children}
          </a>
        )}
      </SectionLink>
    );

  // else render a normal web link
  return (
    <a href={props.to} className={props.className}>
      {props.children}
    </a>
  );
};