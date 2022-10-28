import { FC } from "react";

export interface Props {

}
export type C<T = {}> = FC<T> & {
    props?: T;
    loading?: boolean;
    slug?: string;
}