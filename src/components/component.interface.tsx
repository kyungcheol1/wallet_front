import React from "react";

type ButtonOnclick = {
    (e: React.MouseEvent<HTMLButtonElement>): void;
};

export interface HtmlProps {
    width?: number;
    height?: number;
    text?: string;
    back?: string;
    flex?: string;
    border?: string;
    margin?: number;
    id?: string;
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
    divclick?: () => void;
    account?: string;
    marginL?: number;
    children?: React.ReactElement | React.ReactElement[] | React.ReactNode[] | string;
}

export interface AccountProps {
    account: string;
    balance: number;
}

export interface InputProps {
    placeholder: string;
    id: string;
    text?: string;
    width: number;
    onChange?: (e: React.ChangeEvent) => void;
}

export interface Animation extends HtmlProps {
    state?: boolean;
}

export interface StyledProps {
    width?: number;
    height?: number;
    back?: string;
    flex?: string;
    border?: string;
    margin?: number;
    marginL?: number;
}

