/*
 * Copyright (C) 2012-2020  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import * as data from "data";
import {pgettext} from "translate";

export class CustomBackgroundEditor extends React.PureComponent<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
            url: this.getURL(),
        };

        this.setURL = this.setURL.bind(this);
    }

    render() {
        return <div className="CustomBackgroundEditor">
            <input className="customUrlSelector"
                type="text"
                value={this.state.url}
                placeholder={pgettext("Custom background image url for the website", "Custom background URL")}
                onFocus={e => e.target.select()}
                onChange={this.setURL}
            />

        </div>;
    }

    componentWillMount() {}

    componentWillUnmount() {}

    getURL() {
        return data.get("custom.backgroundUrl");
    }

    setURL(event) {
        data.set("custom.backgroundUrl", event.target.value);
        this.setState({ url: event.target.value});
    }
}
