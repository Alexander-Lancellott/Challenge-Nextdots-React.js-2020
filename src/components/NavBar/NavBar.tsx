// LIBS
import BootstrapSwitchButton from "bootstrap-switch-button-react";

// REACT
import React from "react";

// COMPONENTS & STYLED
import {
  ArrowBack,
  Button,
  Input,
  Search,
  SwitchContainer,
  Styles,
} from "./styles";

// ASSETS
import { ArrowleftIcon, MagnifyingGlassIcon } from "../../assets";

export interface Props {
  checked: boolean;
  episodesSwitch: boolean;
  filters: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  index: string;
  onReset: () => void;
  onSwitch: (checked: boolean) => void;
  search: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const NavBar: React.SFC<Props> = ({
  checked,
  episodesSwitch,
  filters,
  index,
  onReset,
  onSwitch,
  search,
  value,
}) => {
  $(document).ready(function () {
    $(".navbar-toggler").click(function () {
      ($(".panel-collapse") as any).collapse("show");
    });
    $(".navbar-toggler").click(function () {
      ($(".panel-collapse") as any).collapse("hide");
    });
    $("#collapseall").click(function () {
      ($(".panel-collapse") as any).collapse("hide");
    });
    $(".btn-info").click(function () {
      ($(".panel-collapse") as any).collapse("hide");
    });
  });
  return (
    <div className="fixed-top">
      <div className="panel-collapse collapse" id="navbarToggleExternalContent">
        <div className=" pl-4 py-2" style={Styles.filters}>
          <h5 className="text-warning h4">Filters</h5>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-info active">
              <input
                type="radio"
                name="options"
                id="option1"
                value="Characters"
                checked
                onClick={filters}
              />
              Characters
            </label>
            <label className="btn btn-info">
              <input
                type="radio"
                name="options"
                id="option2"
                value="Locations"
                onClick={filters}
              />
              Locations
            </label>
            <label className="btn btn-info">
              <input
                type="radio"
                name="options"
                id="option3"
                value="Episodes"
                onClick={filters}
              />
              Episodes
            </label>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-dark" style={Styles.navBar}>
        <Button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Search className="d-flex flex-row align-items-center rounded-pill">
          {value.length === 0 ? (
            <img
              src={MagnifyingGlassIcon}
              className="img-fluid"
              alt="MagnifyingGlass"
              height="20"
              width="20"
            />
          ) : (
            <ArrowBack onClick={onReset}>
              <img
                src={ArrowleftIcon}
                className="img-fluid"
                alt="MagnifyingGlass"
                height="27"
                width="27"
              />
            </ArrowBack>
          )}
          <Input
            autoComplete="off"
            type="text"
            id="collapseall"
            onChange={search}
            value={value}
            className="pl-2"
          />
        </Search>
        <SwitchContainer>
          <BootstrapSwitchButton
            key={index}
            checked={checked}
            onlabel="Name"
            offlabel={episodesSwitch ? "Episode" : "Type"}
            onChange={(checked: boolean) => onSwitch(checked)}
            onstyle="outline-warning"
            offstyle="outline-info"
            // eslint-disable-next-line react/style-prop-object
            style="w-100"
          />
        </SwitchContainer>
      </nav>
    </div>
  );
};

export default NavBar;
