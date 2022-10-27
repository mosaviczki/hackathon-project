import React from "react";

interface HoverableDropdownProps {
    children: React.ReactNode;
    hoveredChild: React.ReactNode;
}

const HoverableDropdown = ({ children, hoveredChild }: HoverableDropdownProps) => {
    return (
        <div className="hoverable-dropdown">
            <div className="hoverable-dropdown__children">{children}</div>
            <div className="hoverable-dropdown__hovered-child">{hoveredChild}</div>
        </div>
    );
}