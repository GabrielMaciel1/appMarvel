import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

function Personagem() {
  const { state } = useLocation();
  console.log("propriedades", state);
  return (
    <div class="container-personagem">
      <img
        class="image"
        src={state.thumbnail.path + "/portrait_xlarge.jpg"}
        alt=""
      />
      <div class="details">
        <p class="name">{state.name}</p>
        <p class="description">{state.description}</p>
        <div class="comics-table">
          <table>
            <thead>
              <tr>
                <th>Comics</th>
              </tr>
            </thead>
            <tbody>
              {state.comics.items &&
                state.comics.items.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div class="events-table">
            <table>
              <thead>
                <tr>
                  <th>Eventos</th>
                </tr>
              </thead>
              <tbody>
                {state.events.items &&
                  state.events.items.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personagem;
