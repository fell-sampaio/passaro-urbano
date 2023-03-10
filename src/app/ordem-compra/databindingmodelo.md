<div class="container">
  <div class="ordem-compra" *ngIf="idPedidoCompra === undefined">
    <form novalidate>

      <h5>Sua Compra</h5>
      <hr />

      <div class="d-flex justify-content-start align-items-center" style="background: #FAFAFA; padding: 20px; border-bottom: solid 1px #F0F0F0">
        <div class="col-sm-1">
          <img src="/assets/ofertas/1/img1.jpg" class="img-fluid">
        </div>
        <div class="col-sm-6 oferta-container">
          Super Burger
          <br />
          Rodízio de Mini-hambúrger com opção de entrada.
        </div>

        <div>
              <button type="button" class="btn btn-link">-</button>
              1
              <button type="button" class="btn btn-link">+</button>
        </div>

        <div class="col-sm-3 d-flex justify-content-end">
          29.90
        </div>
      </div>

      <div class="row" style="background: #FAFAFA; padding: 20px; border-bottom: solid 1px #F0F0F0">
        <div class="col-sm-1">
          <img src="/assets/ofertas/4/img1.jpg" class="img-fluid">
        </div>
        <div class="col-sm-6">
          Estância das águas
          <br />
          Diversão garantida com piscinas, trilhas e muito mais.
        </div>

        <div>
              <button type="button" class="btn btn-link">-</button>
              1
              <button type="button" class="btn btn-link">+</button>
        </div>

        <div class="col-sm-3 d-flex justify-content-end">
          31.90
        </div>
      </div>

      <div class="row">
        <div class="form-group col d-flex justify-content-end">
          <h4>Total do pedido: 61.80</h4>
        </div>
      </div>
      <br />


      <h5>Dados de entrega</h5>
      <hr />

      <div class="row">

        <div class="col-md-6">
          <input
          type="text"
          class="form-control {{ enderecoEstadoPrimitivo ? '' : (enderecoValido ? 'is-valid' : 'is-invalid') }}"
          placeholder="Endereço"
          autocomplete="off"
          minlength="5"
          required
          [value]="endereco"
          #inputEndereco
          (input)="atualizaEndereco(inputEndereco.value)"
          >
          <div *ngIf="enderecoEstadoPrimitivo == false">
            <div *ngIf="enderecoValido; else msgEnderecoInvalido">
              <small class="form-text text-success">Ok</small>
            </div>
            <ng-template #msgEnderecoInvalido>
              <small class="form-text text-danger">Endereço inválido</small>
            </ng-template>
          </div>
        </div>

        <div class="col-md-2">
          <input
          type="number"
          class="form-control {{ numeroEstadoPrimitivo ? '' : (numeroValido ? 'is-valid' : 'is-invalid') }}"
          placeholder="Número"
          autocomplete="off"
          minlength="1"
          required
          [value]="numero"
          #inputNumero
          (input)="atualizaNumero(inputNumero.value)"
          >
          <div *ngIf="numeroEstadoPrimitivo == false">
            <div *ngIf="numeroValido; else msgNumeroInvalido">
              <small class="form-text text-success">Ok</small>
            </div>
            <ng-template #msgNumeroInvalido>
              <small class="form-text text-danger">Número inválido</small>
            </ng-template>
          </div>
        </div>

        <div class="col-md-4">
          <input
          type="text"
          class="form-control {{ complementoEstadoPrimitivo ? '' : (complementoValido ? 'is-valid' : '') }}"
          placeholder="Complemento"
          autocomplete="off"
          [value]="complemento"
          #inputComplemento
          (input)="atualizaComplemento(inputComplemento.value)"
          >
          <div *ngIf="complementoEstadoPrimitivo == false">
            <div *ngIf="complementoValido">
              <small class="form-text text-success">Ok</small>
            </div>
          </div>
        </div>

      </div>
      <br />

      <h5>Dados de pagamento</h5>
      <hr />

      <div class="form-row">

        <div class="form-group col-md-3">
          <select
          class="form-control {{ formaPagamentoEstadoPrimitivo ? '' : (formaPagamentoValido ? 'is-valid' : 'is-invalid') }}"
          #selectFormaPagamento
          (change)="atualizaFormaPagamento(selectFormaPagamento.value)"
          >
            <option value="">Selecione uma opção</option>
            <option value="dinheiro" selected="{{ formaPagamento == 'dinheiro' ? 'selected' : '' }}">Dinheiro</option>
            <option value="debito" selected="{{ formaPagamento == 'debito' ? 'selected' : '' }}">Débito</option>
          </select>

          <div *ngIf="formaPagamentoEstadoPrimitivo == false">
            <div *ngIf="formaPagamentoValido; else msgFormaPagamentoInvalido">
              <small class="form-text text-success">Ok</small>
            </div>
            <ng-template #msgFormaPagamentoInvalido>
              <small class="form-text text-danger">Forma de pagamento inválida</small>
            </ng-template>
          </div>
        </div>
      </div>

      <hr />
      <button
        type="button"
        class="btn btn-primary btn-lg"
        [disabled]="formEstado"
        (click)="confirmarCompra()"
      >
        Cofirmar compra
      </button>
    </form>
  </div>

  <div class="ordem-compra" *ngIf="idPedidoCompra !== undefined">
    <app-ordem-compra-sucesso [idPedidoCompra]=idPedidoCompra></app-ordem-compra-sucesso>
  </div>
</div>